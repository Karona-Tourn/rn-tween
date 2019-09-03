# **rn-tween**

It can help animating components by timing.

## Installation

- Using **Npm**

```bash
npm install rn-tween --save
```

- Using **Yarn**

```bash
yarn add rn-tween
```

## Tween components

- RNTween
- RNTweenView
- RNTweenImage
- RNTweenText

## Example

### Auto start

```jsx
import {RNTweenView} from 'rn-tween';

<RNTweenView
  autoStartName="transit"
  initialConfig={{
    transit: {
      mode: 'parallel',
      configs: [
        {
          from: 0,
          to: 1,
          duration: 1000,
          styleProperty: 'opacity',
          loop: true,
        },
        {
          from: 0.2,
          to: 1,
          duration: 1000,
          styleProperty: 'scale',
          loop: true,
        },
      ],
    },
  }}
  style={{
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }}
/>;
```

### Call functions

```jsx
import {RNTweenView} from 'rn-tween';

<RNTweenView
  ref={ref => (_tween = ref)}
  firstUsedConfigName="transit"
  initialConfig={{
    transit: {
      mode: 'parallel',
      configs: [
        {
          from: 0,
          to: 1,
          duration: 500,
          styleProperty: 'opacity',
        },
        {
          from: 0.2,
          to: 1,
          duration: 500,
          styleProperty: 'scale',
        },
      ],
    },
  }}
  style={{
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  }}
/>;

// Stop animating the tweeen with a specific configuration name
_tween.start({name: 'transit'});
_tween.start({name: 'transit', reversed: true});
_tween.start({name: 'transit', reversed: true, onComplete: () => alert('Finished')});

// Stop animating the tween
_tween.stop();

// Reprepare tween animation configurations
_tween.prepare({
  transit: {
    mode: 'sequence',
    configs: [
      {
        from: 0,
        to: 1,
        duration: 500,
        styleProperty: 'opacity',
      },
      {
        from: 0.2,
        to: 1,
        duration: 500,
        styleProperty: 'scale',
      },
    ],
  },
});
```

## Available component props

## RNTween

| Name                | Type      | Default | Description                                                                  |
| ------------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| autoStartName       | string    | null    | Tell which animation tween should automatically start at the first time      |
| firstUsedConfigName | string    | null    | Tell which animation tween configuration should be applied at the first time |
| initialConfig       | object    | null    | The initial tween configurations to be used                                  |
| AnimatedComponent   | Component | null    | The animated component to be animated                                        |
| onComplete          | function  | null    | The callback invoked after the tween animation completed                     |

## RNTweenView

Also inherits [ViewProps](https://facebook.github.io/react-native/docs/view)

| Name                | Type     | Default | Description                                                                  |
| ------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| autoStartName       | string   | null    | Tell which animation tween should automatically start at the first time      |
| firstUsedConfigName | string   | null    | Tell which animation tween configuration should be applied at the first time |
| initialConfig       | object   | null    | The initial tween configurations to be used                                  |
| onComplete          | function | null    | The callback invoked after the tween animation completed                     |

## RNTweenText

Also inherits [TextProps](https://facebook.github.io/react-native/docs/text)

| Name                | Type     | Default | Description                                                                  |
| ------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| autoStartName       | string   | null    | Tell which animation tween should automatically start at the first time      |
| firstUsedConfigName | string   | null    | Tell which animation tween configuration should be applied at the first time |
| initialConfig       | object   | null    | The initial tween configurations to be used                                  |
| onComplete          | function | null    | The callback invoked after the tween animation completed                     |

## RNTweenImage

Also inherits [ImageProps](https://facebook.github.io/react-native/docs/image)

| Name                | Type     | Default | Description                                                                  |
| ------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| autoStartName       | string   | null    | Tell which animation tween should automatically start at the first time      |
| firstUsedConfigName | string   | null    | Tell which animation tween configuration should be applied at the first time |
| initialConfig       | object   | null    | The initial tween configurations to be used                                  |
| onComplete          | function | null    | The callback invoked after the tween animation completed                     |

## initialConfig

```jsx
initialConfig: {
  [name: string]: {
    mode,
    configs
  }
}
```

| Name    | Type   | Description                                                    |
| ------- | ------ | -------------------------------------------------------------- |
| mode    | string | Specify tween animation mode like **parallel** or **sequence** |
| configs | array  | Array of tween animation configuration                         |

### initialConfig[name].configs[index]

| Name          | Type   | Description                                                                |
| ------------- | ------ | -------------------------------------------------------------------------- |
| styleProperty | string | Specify any style property to be animated like **opacity**, **scale**, etc |
| from          | number | Value from where the animation starts                                      |
| to            | number | Value to where the animation must reach                                    |
| duration      | number | Duration of animation                                                      |
| delay         | number | Delay before the animation starts                                          |
| loop          | bool   | Tell if the animation should play as loop                                  |
| easing        | function | Easing function to define curve. Default is TweenEasing.linear           |
| useNative     | bool   | Uses the native driver when true. Default is true                          |

## Available instance functions

### start({ name, reversed, onComplete })

| Name       | Type     | Description                                   |
| ---------- | -------- | --------------------------------------------- |
| name       | string   | Name of tween animation configuration         |
| reversed   | bool     | Tell if the animation should play in reverse  |
| onComplete | function | Callback invoked after the animation complete |

### stop()

Stop a running animation

### prepare({ mode, configs })

| Name    | Type   | Description                                                    |
| ------- | ------ | -------------------------------------------------------------- |
| mode    | string | Specify tween animation mode like **parallel** or **sequence** |
| configs | array  | Array of tween animation configuration                         |

## License

- [MIT](LICENSE)
