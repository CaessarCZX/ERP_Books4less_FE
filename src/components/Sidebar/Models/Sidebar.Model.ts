import { FC } from 'react';

export type Icon = FC<React.ComponentProps<'svg'>>;

export type PermissionsType = 'user' | 'admin';

export interface ISedebarItem {
  url: string;
  path: string;
  icon: Icon;
  title: string;
  permissions: PermissionsType;
}
