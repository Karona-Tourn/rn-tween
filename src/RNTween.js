import React from 'react';
import { Animated } from 'react-native';

const transformProperties = [
	'perspective',
	'rotate',
	'rotateX',
	'rotateY',
	'rotateZ',
	'scale',
	'scaleX',
	'scaleY',
	'skewX',
	'skewY',
	'translateX',
	'translateY'
];

export class RNTween extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animatedStyles: [],
			tweenConfig: {},
			playedTweenName: '',
			mounted: false
		};

		this.prepare(props.initialConfig);

		const configNames = Object.keys(this.state.tweenConfig);
		if (configNames.length > 0) {
			const config = this.state.tweenConfig[
				props.firstUsedConfigName || configNames[0]
			];

			if (config) {
				this.state.animatedStyles = this._getComputedAnimatedStyles(
					config
				);
			}
		}

		this.props.autoStartName &&
			this.start({ name: this.props.autoStartName, reversed: false });
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
		const { style, restProps, AnimatedComponent } = this.props;
		return (
			<AnimatedComponent
				{...restProps}
				style={[style, ...this.state.animatedStyles]}
			/>
		);
	}

	_createAnimatedTween(config, reversed) {
		const { delay, value, from, to, interpolated, duration } = config;

		value.setValue(
			reversed ? (interpolated ? 1 : to) : interpolated ? 0 : from
		);

		const createTiminingTween = () =>
			Animated.timing(value, {
				toValue: reversed
					? interpolated
						? 0
						: from
					: interpolated
					? 1
					: to,
				delay: delay === null || delay === undefined ? 0 : delay,
				duration:
					duration === null || duration === undefined ? 0 : duration,
				useNativeDriver: true
			});

		if (config.loop) {
			return Animated.loop(createTiminingTween());
		} else {
			return createTiminingTween();
		}
	}

	_getComputedAnimatedStyles(config) {
		const animatedStyles = config.configs
			.filter(e => (e.styleProperty ? true : false))
			.map(e => {
				const isStyleForTransform = transformProperties.includes(
					e.styleProperty
				);

				let value = null;

				if (e.interpolated) {
					value = e.value.interpolate({
						inputRange: [0, 1],
						outputRange: [e.from, e.to]
					});
				} else {
					value = e.value;
				}

				if (isStyleForTransform) {
					return {
						transform: [
							{
								[e.styleProperty]: value
							}
						]
					};
				} else {
					return {
						[e.styleProperty]: value
					};
				}
			});
		return animatedStyles;
	}

	prepare(config) {
		this.stop();

		if (!config) {
			return;
		}

		const tweenConfig = {};

		for (let k in config) {
			const c = config[k];
			const newConfig = { mode: c.mode, loop: c.loop };

			newConfig.configs = c.configs
				.filter(e => (e.styleProperty ? true : false))
				.map(e => {
					return {
						...e,
						value: new Animated.Value(
							typeof e.from === 'string' ? 0 : e.from
						),
						interpolated: typeof e.from === 'string'
					};
				});

			tweenConfig[k] = newConfig;
		}

		if (this.state.mounted) {
			this.setState({ tweenConfig });
		} else {
			this.state = { ...this.state, tweenConfig };
		}
	}

	start(option) {
		const config = this.state.tweenConfig[option.name];

		if (!config) {
			return;
		}

		this.stop();

		if (this.state.playedTweenName != option.name) {
			const animatedStyles = this._getComputedAnimatedStyles(config);

			if (this.state.mounted) {
				this.setState({
					playedTweenName: option.name,
					animatedStyles
				});
			} else {
				this.state = {
					...this.state,
					playedTweenName: option.name,
					animatedStyles
				};
			}
		}

		const tweens = config.configs.map(e =>
			this._createAnimatedTween(e, option.reversed)
		);

		let tweenStarter =
			!config.mode || config.mode == 'parallel'
				? Animated.parallel
				: Animated.sequence;

		this._runningTween = tweenStarter(tweens);
		this._runningTween.start(() => {
			this._runningTween = null;
			this.props.onComplete && this.props.onComplete();
			option.onComplete && option.onComplete();
		});
	}

	stop() {
		this._runningTween && this._runningTween.stop();
		this._runningTween = null;
	}
}

RNTween.defaultProps = {
	AnimatedComponent: Animated.View
};

export class RNTweenView extends React.Component {
	render() {
		const { AnimatedComponent, ...restProps } = this.props;
		return (
			<RNTween
				ref={this._onRef}
				{...restProps}
				AnimatedComponent={Animated.View}
			/>
		);
	}

	_onRef = ref => {
		this._tween = ref;
	};

	prepare(config) {
		this._tween && this._tween.prepare(config);
	}

	start(option) {
		this._tween && this._tween.start(option);
	}

	stop() {
		this._tween && this._tween.stop();
	}
}

export class RNTweenText extends React.Component {
	render() {
		const { AnimatedComponent, ...restProps } = this.props;
		return (
			<RNTween
				ref={this._onRef}
				{...restProps}
				AnimatedComponent={Animated.Text}
			/>
		);
	}

	_onRef = ref => {
		this._tween = ref;
	};

	prepare(config) {
		this._tween && this._tween.prepare(config);
	}

	start(option) {
		this._tween && this._tween.start(option);
	}

	stop() {
		this._tween && this._tween.stop();
	}
}

export class RNTweenImage extends React.Component {
	render() {
		const { AnimatedComponent, ...restProps } = this.props;
		return (
			<RNTween
				ref={this._onRef}
				{...restProps}
				AnimatedComponent={Animated.Image}
			/>
		);
	}

	_onRef = ref => {
		this._tween = ref;
	};

	prepare(config) {
		this._tween && this._tween.prepare(config);
	}

	start(option) {
		this._tween && this._tween.start(option);
	}

	stop() {
		this._tween && this._tween.stop();
	}
}
