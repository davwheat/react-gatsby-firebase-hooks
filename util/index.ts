export { default as useLoadingValue } from './useLoadingValue';
export * from './refHooks';
export { default as FirebaseInterface } from './firebaseInterface';

export type LoadingHook<T, E> = [T | undefined, boolean, E | undefined];
