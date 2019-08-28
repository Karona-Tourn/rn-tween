# **rn-tween**

It can help animating components by timing.

## Installation

- Using **Npm**

```bash
npm install rn-tween --save
```

- Using **Yarn**

```bash
yarn add rn-tween --dev
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

// Stop animating the tween
_tween.stop();
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

| Name    | Type   | Default | Description                                                    |
|---------|--------|---------|----------------------------------------------------------------|
| mode    | string | null    | Specify tween animation mode like **parallel** or **sequence** |
| configs | array  | null    | Array of tween animation configuration                         |

### initialConfig.configs

| Name          | Type   | Description                                                                |
|---------------|--------|----------------------------------------------------------------------------|
| styleProperty | string | Specify any style property to be animated like **opacity**, **scale**, etc |
| from          | number | Value from where the animation starts                                      |
| to            | number | Value to where the animation must reach                                    |
| duration      | number | Duration of animation                                                      |
| delay         | number | Delay before the animation starts                                          |
| loop          | bool   | Tell if the animation should play as loop                                  |

## License

- [MIT](LICENSE)
