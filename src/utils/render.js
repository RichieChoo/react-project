import React, { Fragment } from 'react';
import { Divider, Button } from 'antd';

export const boolRender = val => (val ? '是' : '否');

export const enableRender = val => (val ? '启用' : '禁用');

export const btnRenderFactory = (btns = [], thisArg) => (text, record) => (
  <Fragment>
    {btns.map(({ label, key, callback }, index, arr) => (
      <Fragment key={key}>
        <a onClick={() => typeof callback === 'function' && callback.call(thisArg, record, text)}>{label}</a>
        {index < arr.length - 1 ? <Divider type="vertical" /> : ''}
      </Fragment>
    ))}
  </Fragment>
);

export const btnRender = (btns = []) => (
  <Fragment>
    {btns.map(({ label, callback, key, type, ...btnProps }) => (
      <Button onClick={callback} key={key} type={type} {...btnProps} >{label}</Button>
    ))}
  </Fragment>
);
