import React from 'react';
import './index.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fab from '@material-ui/core/Fab';

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__icons">
                <a href="https://www.linkedin.com/in/chase-hoffman-a94443168/" target="_blank" rel="noreferrer noopener">
                    <Fab className="footer__icon" color="darkgrey" aria-label="Linked-In">
                        <LinkedInIcon fontSize="large"  />
                    </Fab>
                </a>
                <a href="https://github.com/chasehoff" target="_blank" rel="noreferrer noopener">
                    <Fab className="footer__icon" color="darkgrey" aria-label="Linked-In">
                        <GitHubIcon fontSize="large"  />
                    </Fab>
                </a>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer
