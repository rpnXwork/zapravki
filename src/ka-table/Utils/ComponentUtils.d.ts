import React from 'react';
import { ChildComponent } from '../Models/ChildComponent';
import { ChildAttributesItem } from '../types';
declare class ElementCustomization {
    content?: any;
    elementAttributes: React.AllHTMLAttributes<HTMLElement>;
}
export declare const getElementCustomization: (childElementAttributes: React.AllHTMLAttributes<HTMLElement>, props: any, childComponent?: ChildComponent<any>) => ElementCustomization;
export declare const addElementAttributes: (elementAttributes: ChildAttributesItem<any>, props: any, childComponent?: ChildComponent<any>) => ChildComponent<any>;
export {};
