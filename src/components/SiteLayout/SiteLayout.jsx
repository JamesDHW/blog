import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Subtitle } from '../../stylesheet'
import { NavbarGroup, NavbarDivider, Alignment, Icon } from '@blueprintjs/core'
import {
  ContentContainer,
  StyledNavbar,
  StyledRightNavbarGroup,
  BlogTitle,
  Link
} from './SiteLayout.style'

const ICON_HEIGHT = 24

export const SiteLayout = ({ children }) => {
  return (
    <div className="bp3-dark">
      <StyledNavbar fixedToTop>
        <NavbarGroup align={Alignment.LEFT}>
          <Link href="https://jamesdhw.github.io">
            <Icon size={ICON_HEIGHT} color="white" icon="home" />
          </Link>
          <NavbarDivider />
          <BlogTitle href="/blog">
            <Subtitle>James' Blog 🚀</Subtitle>
          </BlogTitle>
        </NavbarGroup>

        <StyledRightNavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider />
          <Link target="_blank" href="https://github.com/JamesDHW">
            <StaticImage
              height={ICON_HEIGHT}
              src="../../images/icons/GitHub.png"
            />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/jamesdhw/">
            <StaticImage
              height={ICON_HEIGHT}
              src="../../images/icons/LinkedIn.png"
            />
          </Link>
        </StyledRightNavbarGroup>
      </StyledNavbar>

      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}