import React from 'react'
import { RVText, RVImage } from 'components'
import { css } from 'emotion'

export default class SponsorsSection extends React.Component {
  render() {
    const { sponsors } = this.props
    return (
      <div className={classes.container}>
        <RVText subheading>Produly sponsored by</RVText>
        <div className={classes.sponsorRow}>
          {sponsors
            ? sponsors.map(sponsor => {
                if (sponsor.src)
                  return <RVImage key={sponsor.id} {...sponsor} />
              })
            : null}
          <RVImage
            className={classes.sponsorLogo}
            resolutions={{
              width: 200,
              height: 50,
              src:
                'https://cdn.shopify.com/s/files/1/0892/1446/files/zen_logo.png?6989538583500256853',
            }}
            alt="Zenefits"
          />
          <RVImage
            className={classes.sponsorLogo}
            resolutions={{
              width: 200,
              height: 97,
              src:
                'https://portal.caarewards.ca/bcaa/wp-content/uploads/2018/05/PartnerImage72773.png',
            }}
            alt=""
          />
        </div>
        <RVText link>Become a sponsor</RVText>
      </div>
    )
  }
}

const classes = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  sponsorRow: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  }),
  sponsorLogo: css({
    maxWidth: 200,
    maxHeight: 160,
    marginLeft: 6,
    marginRight: 6,
  }),
}