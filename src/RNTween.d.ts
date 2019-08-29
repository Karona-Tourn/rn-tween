import { Component, ComponentType } from 'react';
import { ViewProps, TextProps, ImageProps, EasingFunction, Easing } from 'react-native';

interface RNTweenConfig {
    [index: string]: {
        mode?: 'parallel' | 'sequence' | null,
        configs?: {
            styleProperty: string,
            from: number | string,
            to: number | string,
            duration?: number,
            delay?: number,
            loop?: boolean | null,
            easing?: EasingFunction | null,
            useNative?: boolean | null
        }[]
    };
}

interface RNTweenProps {
    autoStartName?: string | null;
    firstUsedConfigName?: string | null;
    initialConfig?: RNTweenConfig | null;
    AnimatedComponent?: ComponentType<any> | null;
    onComplete?: () => void | null;
}

export {
    Easing as TweenEasing
};

export class RNTween extends Component<RNTweenProps> {
    prepare(config: RNTweenConfig | null): void;

    start(option: {
        name: string,
        reversed: boolean,
        onComplete: () => void
    }): void;

    stop(): void;
}


interface RNTweenViewProps extends ViewProps, RNTweenProps {
}

export class RNTweenView extends Component<RNTweenViewProps> {
    prepare(config: RNTweenConfig | null): void;

    start(option: {
        name: string,
        reversed: boolean,
        onComplete: () => void
    }): void;

    stop(): void;
}

interface RNTweenTextProps extends TextProps, RNTweenProps {
}

export class RNTweenText extends Component<RNTweenTextProps> {
    prepare(config: RNTweenConfig | null): void;

    start(option: {
        name: string,
        reversed: boolean,
        onComplete: () => void
    }): void;

    stop(): void;
}

interface RNTweenImageProps extends ImageProps, RNTweenProps {
}

export class RNTweenImage extends Component<RNTweenImageProps> {
    prepare(config: RNTweenConfig | null): void;

    start(option: {
        name: string,
        reversed: boolean,
        onComplete: () => void
    }): void;

    stop(): void;
}