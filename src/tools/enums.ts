enum FrameMode {
  Contrast,
  Focus
}

enum HideDirection {
  Up,
  Right,
  Left,
  None,
  Minify
}

enum YoudaoStatus {
  Success,
  Fail
}

enum MessageType {
  WindowOpt,
  TranslateResult,
  OpenMenu,
  Router,
  UpdateT
}

enum WinOpt {
  Minify,
  Drag,
  Resize,
  Zoom,
  OpenExternal,
  ChangeColor,
  Refresh
}

function rgb(r: number, g: number, b: number) {
  const R = Math.floor(r / 16).toString(16) + Math.floor(r % 16).toString(16);
  const G = Math.floor(g / 16).toString(16) + Math.floor(g % 16).toString(16);
  const B = Math.floor(b / 16).toString(16) + Math.floor(b % 16).toString(16);
  return "#" + R + G + B;
}

export function mkenum<T extends { [index: string]: U }, U extends string>(
  x: T
) {
  return x;
}

const ColorStatus = mkenum({
  None: rgb(190, 190, 190),
  Listen: rgb(84, 255, 159),
  AutoCopy: rgb(152, 245, 255),
  Translating: rgb(238, 238, 0),
  Incremental: rgb(147, 112, 219),
  IncrementalCopy: rgb(199, 21, 133),
  AutoPaste: rgb(0, 0, 139),
  IncrementalCopyPaste: rgb(0, 0, 128),
  Fail: rgb(255, 0, 0)
});
type ColorStatus = (typeof ColorStatus)[keyof typeof ColorStatus];

export {
  FrameMode,
  YoudaoStatus,
  ColorStatus,
  MessageType,
  WinOpt,
  HideDirection
};
