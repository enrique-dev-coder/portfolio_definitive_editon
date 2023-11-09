import {
  AwsIcon,
  CssIcon,
  DynamoDbIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  MuiIconn,
  NextIcon,
  NodeIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  WoocommerceIcon,
  WordpressIcon,
} from './TechIcons';

export type IconMap = {
  [key: string]: {
    icon: React.ReactElement;
    title: string;
  };
};

export type IconKeys =
  | 'aws'
  | 'css'
  | 'dynamoDb'
  | 'git'
  | 'html'
  | 'js'
  | 'mui'
  | 'next'
  | 'node'
  | 'php'
  | 'react'
  | 'redux'
  | 'tailwind'
  | 'ts'
  | 'woo'
  | 'wp';

// TODO Agregar jest y cypress
export const IconsObj: IconMap = {
  aws: {
    icon: <AwsIcon className="" />,
    title: 'AWS',
  },
  css: {
    icon: <CssIcon className="" />,
    title: 'CSS',
  },
  dynamoDb: { icon: <DynamoDbIcon className="" />, title: 'Dyanamo DB NoSql' },
  git: {
    icon: <GitIcon className="" />,
    title: 'Git',
  },
  html: {
    icon: <HtmlIcon className="" />,

    title: 'HTML',
  },
  js: {
    icon: <JsIcon className="" />,
    title: 'JavaScript',
  },
  mui: {
    icon: <MuiIconn className="" />,

    title: 'Material UI',
  },

  next: {
    icon: <NextIcon className="" />,

    title: 'Next JS',
  },
  node: {
    icon: <NodeIcon className="" />,

    title: 'NodeJs',
  },
  php: {
    icon: <PhpIcon className="" />,
    title: 'Php',
  },
  react: {
    icon: <ReactIcon className="" />,

    title: 'React Js',
  },
  redux: {
    icon: <ReduxIcon className="" />,

    title: 'Redux',
  },
  tailwind: {
    icon: <TailwindIcon className="" />,

    title: 'TailwindCss',
  },

  ts: {
    icon: <TypeScriptIcon className="" />,
    title: 'TypeScript',
  },
  woo: {
    icon: <WoocommerceIcon className="" />,

    title: 'WooCommerce',
  },
  wp: {
    icon: <WordpressIcon className="" />,

    title: 'Wordpress',
  },
};
