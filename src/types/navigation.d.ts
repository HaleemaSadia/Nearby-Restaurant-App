import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    // https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends Navigation.RootNavigatorParams {}
  }
}

declare namespace Navigation {
  type RootNavigatorParams = {
    MainNavigator: NavigatorScreenParams<MainNavigatorParams>;
  };

  type RootNavigatorScreenProps<T extends keyof RootNavigatorParams> =
    NativeStackScreenProps<RootNavigatorParams, T>;

  /**
   * We will need to declare all the screens that's in the MainNavigator.
   * And declare the params they should take (if any).
   * Use undefined if the screen takes no params.
   **/
  type MainNavigatorParams = {
    Home: undefined;
    Settings: {myParam: string};
  };

  type MainNavigatorScreenProps<T extends keyof MainNavigatorParams> =
    CompositeScreenProps<
      NativeStackScreenProps<MainNavigatorParams, T>,
      RootNavigatorScreenProps<keyof RootNavigatorParams>
    >;
}
