/**
 * Typovani pro context
 */

export type ContextAction<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        value: M[Key];
      };
};
