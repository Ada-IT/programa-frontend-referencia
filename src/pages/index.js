import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={siteConfig.title}
      description='Description will go into a meta tag in <head />'
    >
      <header className={classnames('hero', styles.heroBanner)}>
        <div className={classnames(styles.headerContainer)}>
          <h1 className={classnames(styles.heroTitle)}>{siteConfig.title}</h1>
          <div className={classnames(styles.headerImgContainer)}>
            <img src={useBaseUrl('img/carreras.png')} />
          </div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--primary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/modulo-1/clase-01')}
            >
              Ir clases
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default Home
