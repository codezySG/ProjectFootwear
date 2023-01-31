/** @jsxImportSource theme-ui */
// Dependencies
import React from 'react';

import { jsx, Image, Heading } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, asset: Asset, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
        {
            Asset ? <Asset /> : <Image src={src} alt="startup landing logo" />
        }
    </Link>
  );
}

export class LogoText extends React.PureComponent {
    render () {
        const { name, ...rest } = this.props;

        return (
            <Link
              path="/"
              sx={{
                variant: 'links.logo',
                display: 'flex',
                cursor: 'pointer',
                mr: 15,
                'textDecoration': 'none'
              }}
              {...rest}
            >
                <Heading as="h2" variant="logoText">
                    <span id="logo" sx={{'fontSize': ['18px', null, null, '22px']}}>{ name }</span>
                </Heading>
            </Link>
        );
    }
}