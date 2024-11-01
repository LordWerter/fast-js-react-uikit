import { CSSObject } from '@emotion/react';

export enum SizeId {
    mobile = 'mobile',
    tablet = 'tablet',
    laptop = 'laptop',
    desktop = 'desktop',
    fullhd = 'fullhd',
    is4k = '4k',
}

export type TextBlockName = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P';

export enum PossibleStyledNodeName {
    CWrap = 'CWrap',
    Name = 'Name',
    Title = 'Title',
    SubTitle = 'SubTitle',
    TextBlock = 'TextBlock',
    Description = 'Description',
    ShortDescription = 'ShortDescription',
    FullDescription = 'FullDescription',

    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    H4 = 'H4',
    H5 = 'H5',
    H6 = 'H6',
    P = 'P',
    SubscriptText = 'SubStrText',
    Index = 'Index',
    SuperscriptText = 'SuperscriptText',
    Paragraph = 'Paragraph',
    Text = 'Text',
    Label = 'Label',
    Caption = 'Caption',
    Placeholder = 'Placeholder',
    Notice = 'Notice',
    Note = 'Note',
    Comment = 'Comment',
    Word = 'Word',
    SubString = 'SubString',
    StrChunk = 'StrChunk',
    Prefix = 'Prefix',
    Postfix = 'Postfix',
    Measure = 'Measure',
    Currency = 'Currency',
    Value = 'Value',
    CurNum = 'CurNum',
    MaxNum = 'MaxNum',

    Picture = 'Picture',
    Image = 'Image',
    Img = 'Img',
    PreviewImg = 'PreviewImg',
    Icon = 'Icon',
    FaviconImg = 'FaviconImg',
    Avatar = 'Avatar',

    Head = 'Head',
    Header = 'Header',
    Footer = 'Footer',
    Section = 'Section',
    Container = 'Container',
    Chunk = 'Chunk',
    Content = 'Content',

    Sheet = 'Sheet',

    Separator = 'Separator',
    Delimiter = 'Delimiter',
    Divider = 'Divider',
    Helper = 'Helper',

    Table = 'Table',
    Column = 'Column',
    Row = 'Row',
    Cell = 'Cell',
    Legend = 'Legend',

    Input = 'Input',
    Stick = 'Stick',

    Slot = 'Slot',
    Step = 'Step',
    Track = 'Track',
    Rail = 'Rail',
    Slide = 'Slide',
    Roller = 'Roller',
    Scroller = 'Scroller',
    Bar = 'Bar',
    Panel = 'Panel',
    Pallette = 'Pallette',
    Bookmark = 'Bookmark',
    Marker = 'Marker',

    ItemsWrap = 'ItemsWrap',
    Item = 'Item',

    Form = 'Form',

    Link = 'Link',
    RefLink = 'Reference',
    Remark = 'Remark',

    Btn = 'Btn',
    Button = 'Button',
    CloseBtn = 'CloseBtn',
    ResetBtn = 'ResetBtn',
    SearchBtn = 'SearchBtn',
    ToggleBtn = 'ToggleBtn',
    CancelBtn = 'CancelBtn',
    SetYesBtn = 'SetYesBtn',
    SetNoBtn = 'SetNoBtn',
    ConfirmBtn = 'ConfirmBtn',
    HideBtn = 'HideBtn',
    ClearBtn = 'ClearBtn',
    RemoveBtn = 'RemoveBtn',
    UploadBtn = 'UploadBtn',
    SignInBtn = 'SignInBtn',
    SignOutBtn = 'SignOutBtn',
    SignOnBtn = 'SignOnBtn',
    FaviconBtn = 'FaviconBtn',
    RotateBtn = 'RotateBtn',
    SwitchBtn = 'SwitchBtn',
    NextBtn = 'NextBtn',
    PrevBtn = 'PrevBtn',
    BackBtn = 'BackBtn',

    BtnsGroup = 'BtnsGroup',
    ButtonsList = 'ButtonsList',
    Plate = 'Plate',
    Tile = 'Tile',
    ControlsPanel = 'ControlsPanel',
    DotsPanel = 'DotsPanel',
    DotBtn = 'DotBtn',
    LikeBtn = 'LikeBtn',
    SortBtn = 'SortBtn',
    FilterBtn = 'FilterBtn',
    ShowMoreBtn = 'ShowMoreBtn',
    WhatIsItBtn = 'WhatIsItBtn',
    MoreBtn = 'MoreBtn',
    GoToBtn = 'GoToBtn',
    SweepBtn = 'SweepBtn',
    SwapBtn = 'SwapBtn',

    SplashLayout = 'SplashLayout',
    Spinner = 'Spinner',
    Loader = 'Loader',

    Viewport = 'Viewport',
    Stage = 'Stage',
    Frame = 'Frame',
    Box = 'Box',
    Figure = 'Figure',
    Line = 'Line',
    Сurve = 'Curve',
    Edge = 'Edge',
    Vertex = 'Vertex',
    Pointer = 'Pointer',

    Vector = 'Vector',
    Сorner = 'Сorner',
    Angle = 'Angle',
}

export type StyledNodeTheme<NodeNameList extends string> = Record<
    NodeNameList,
    CSSObject
>;

export interface StyledNodeProps<StyledNodeNames extends string> {
    sizeId: SizeId;
    theme: StyledNodeTheme<StyledNodeNames>;
    'data-testid': string;
}

export type TagName =
    | 'a'
    | 'abbr'
    | 'address'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
    | 'bdi'
    | 'bdo'
    | 'big'
    | 'blockquote'
    | 'body'
    | 'br'
    | 'button'
    | 'canvas'
    | 'Caption'
    | 'cite'
    | 'code'
    | 'col'
    | 'colgroup'
    | 'data'
    | 'datalist'
    | 'dd'
    | 'del'
    | 'details'
    | 'dfn'
    | 'dialog'
    | 'div'
    | 'dl'
    | 'dt'
    | 'em'
    | 'embed'
    | 'fieldset'
    | 'figCaption'
    | 'figure'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'hgroup'
    | 'hr'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'input'
    | 'ins'
    | 'kbd'
    | 'keygen'
    | 'Label'
    | 'legend'
    | 'li'
    | 'link'
    | 'main'
    | 'map'
    | 'mark'
    | 'menu'
    | 'menuitem'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'noindex'
    | 'noscript'
    | 'object'
    | 'ol'
    | 'optgroup'
    | 'option'
    | 'output'
    | 'p'
    | 'param'
    | 'picture'
    | 'pre'
    | 'progress'
    | 'q'
    | 'rp'
    | 'rt'
    | 'ruby'
    | 's'
    | 'samp'
    | 'slot'
    | 'script'
    | 'section'
    | 'select'
    | 'small'
    | 'source'
    | 'span'
    | 'strong'
    | 'style'
    | 'sub'
    | 'summary'
    | 'sup'
    | 'table'
    | 'template'
    | 'tbody'
    | 'td'
    | 'textarea'
    | 'tfoot'
    | 'th'
    | 'thead'
    | 'time'
    | 'title'
    | 'tr'
    | 'track'
    | 'u'
    | 'ul'
    | 'var'
    | 'video'
    | 'wbr'
    | 'webview'
    | 'svg'
    | 'animate'
    | 'animateMotion'
    | 'animateTransform'
    | 'circle'
    | 'clipPath'
    | 'defs'
    | 'desc'
    | 'ellipse'
    | 'feBlend'
    | 'feColorMatrix'
    | 'feComponentTransfer'
    | 'feComposite'
    | 'feConvolveMatrix'
    | 'feDiffuseLighting'
    | 'feDisplacementMap'
    | 'feDistantLight'
    | 'feDropShadow'
    | 'feFlood'
    | 'feFuncA'
    | 'feFuncB'
    | 'feFuncG'
    | 'feFuncR'
    | 'feGaussianBlur'
    | 'feImage'
    | 'feMerge'
    | 'feMergeNode'
    | 'feMorphology'
    | 'feOffset'
    | 'fePointLight'
    | 'feSpecularLighting'
    | 'feSpotLight'
    | 'feTile'
    | 'feTurbulence'
    | 'filter'
    | 'foreignObject'
    | 'g'
    | 'image'
    | 'line'
    | 'linearGradient'
    | 'marker'
    | 'mask'
    | 'metadata'
    | 'mpath'
    | 'path'
    | 'pattern'
    | 'polygon'
    | 'polyline'
    | 'radialGradient'
    | 'rect'
    | 'stop'
    | 'switch'
    | 'symbol'
    | 'text'
    | 'textPath'
    | 'tspan'
    | 'use'
    | 'view';
