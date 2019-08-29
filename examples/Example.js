import React from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';
import { RNTweenView, TweenEasing } from '../src/RNTween';

export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false
		};
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<RNTweenView
					autoStartName='transit1'
					initialConfig={{
						transit1: {
							mode: 'parallel',
							configs: [
								{
									from: 0,
									to: 1,
									duration: 1000,
									styleProperty: 'opacity',
									loop: true,
									useNative: true
								},
								{
									from: 0.2,
									to: 1,
									duration: 1000,
									styleProperty: 'scale',
									loop: true,
									useNative: true,
									easing: TweenEasing.bounce
								}
							]
						}
					}}
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						backgroundColor: 'red',
						alignSelf: 'center'
					}}
				/>

				<RNTweenView
					ref={ref => (this._tween = ref)}
					firstUsedConfigName='transit2'
					initialConfig={{
						transit2: {
							mode: 'parallel',
							configs: [
								{
									from: 0,
									to: 1,
									duration: 500,
									styleProperty: 'opacity'
								},
								{
									from: 0.2,
									to: 1,
									duration: 500,
									styleProperty: 'scale'
								}
							]
						}
					}}
					style={{
						marginVertical: 50,
						width: 100,
						height: 100,
						backgroundColor: 'orange',
						alignSelf: 'center'
					}}
				/>

				<Button
					title={this.state.isPlaying ? 'Stop' : 'Start'}
					onPress={() => {
						this.setState({ isPlaying: !this.state.isPlaying }, () => {
							if (this.state.isPlaying) {
								this._tween.start({
									name: 'transit2',
									onComplete: () => {
										this.setState({ isPlaying: false });
									}
								});
							} else {
								this._tween.stop();
							}
						});
					}}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10
	}
});
