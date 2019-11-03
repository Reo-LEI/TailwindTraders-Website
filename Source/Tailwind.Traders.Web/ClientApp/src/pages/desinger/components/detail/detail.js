import React from "react";

import { withNamespaces } from "react-i18next";

import MockupSmall from "../../../../assets/images/Mockup_Small.png";
import MockupSmall2 from "../../../../assets/images/Mockup_Small@2x.png";
import MockupBig from "../../../../assets/images/Mockup_Big.png";
import MockupBig2 from "../../../../assets/images/Mockup_Big@2x.png";

const Detail = ({ t }) => {
    return (
        <section className="desinger">
            <header className="desinger__header">
                <h1 className="desinger-title">{t("home.desinger.title")}</h1>
                <p className="desinger-text">{t("home.desinger.subtitle")}</p>
                <div className="desinger__stores-wrapper">
                    <a className="btn btn--desinger btn--desinger--left" href="https://aka.ms/tailwindtradersios">
                        <div className="desinger-btntext">Get it now for </div>iOS
                    </a>
                </div>
            </header>
            <picture className="desinger__body">
                <source
                    srcSet={`${MockupSmall} 1x, ${MockupSmall2} 2x`}
                    media="(min-width: 20em)"
                />
                <source
                    srcSet={`${MockupBig} 1x, ${MockupBig2} 2x`}
                    media="(min-width: 85.375em)"
                />
                <img
                    srcSet={`${MockupSmall} 1x, ${MockupSmall2} 2x`}
                    alt="Black iPhone displaying Tailwind Traders' home screen"
                />
            </picture>
        </section>
    );
};

export default withNamespaces()(Detail);
