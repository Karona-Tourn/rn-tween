import React from 'react';
import { ViewProps, TextProps, ImageProps } from 'react-native'

interface RNTweenConfig {
    [index: string]: {
        mode?: 'parallel' | 'sequence' | null,
        configs?: {
            styleProperty: string,
            from: number | string,
            to: number | string,
            duration?: number,
            delay?: number,
            loop?: boolean | null
        }[]
    };
}

interface RNTweenProps {
    autoStartName?: string | null;
    firstUsedConfigName?: string | null;
    initialConfig?: RNTweenConfig | null;
    AnimatedComponent?: React.ComponentType<any> | null;
    onComplete?: () => void | null;
}

export class RNTween extends React.Component<RNTweenProps> {
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

export class RNTweenView extends React.Component<RNTweenViewProps> {
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

export class RNTweenText extends React.Component<RNTweenTextProps> {
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

export class RNTweenImage extends React.Component<RNTweenImageProps> {
    prepare(config: RNTweenConfig | null): void;

    start(option: {
        name: string,
        reversed: boolean,
        onComplete: () => void
    }): void;

    stop(): void;
}