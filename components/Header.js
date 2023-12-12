import React from "react"
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

export default () => {
    return (
        <Menu style={{ marginTop: '1rem' }}>
            <Link legacyBehavior route="/">
                <a className="item">
                    CrowdCoin
                </a>
            </Link>
            <Menu.Menu position="right">
            <Link legacyBehavior route="/">
                <a className="item">
                    Campaigns
                </a>
            </Link>

            <Link legacyBehavior route="/campaigns/new">
                <a className="item">
                    +
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
    )
}