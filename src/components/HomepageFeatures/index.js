import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A front-end enthusiast.',
    Svg: require('@site/static/img/banne1.svg').default,
    // description: (
    //   <>
    //     前端学习者，热衷于视觉页面的东西，包含 JavaScript、css、React、Vue 等实用技术。
    //   </>
    // ),
  },
  {
    title: 'Now studying at BJFU.',
    Svg: require('@site/static/img/banne2.svg').default,
    // description: (
    //   <>
    //     Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
    //     ahead and move your docs into the <code>docs</code> directory.
    //   </>
    // ),
  },
  {
    title: 'Digital Media Learner',
    Svg: require('@site/static/img/banned.svg').default,
    // description: (
    //   <>
    //     Extend or customize your website layout by reusing React. Docusaurus can
    //     be extended while reusing the same header and footer.
    //   </>
    // ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
