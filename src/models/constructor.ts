import React from 'react';
import {MediaProps, Block, Animatable} from './blocks';

export interface PageData {
    content: PageContent;
}

export interface Menu {
    title: string;
}

export interface PageContent extends Animatable {
    blocks: Block[];
    menu?: Menu;
    background?: MediaProps;
    footnotes?: string[];
}

export interface InitConstrucorState {
    hasMenu: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoadableData = any;
export type FetchLoadableData<TData = LoadableData> = (blockKey: string) => Promise<TData>;
export type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;
export type OnInit = (data: InitConstrucorState) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomComponent = React.ComponentType<any>;

export type CustomBlocks = Record<string, CustomComponent>;

export interface LoadableConfigItem {
    fetch: FetchLoadableData;
    component: CustomComponent;
}

export type LoadableConfig = Record<string, LoadableConfigItem>;

export interface CustomConfig {
    blocks?: CustomBlocks;
    headers?: CustomBlocks;
    loadable?: LoadableConfig;
}
