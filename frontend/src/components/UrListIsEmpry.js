import "../scss/_linkList.scss"
import { DotestText } from "./DotesText"

export const UrListIsEmpty = () =>{
    return(
        <div className="lieAlert-main">
            <div className="lieAlert__content">
            <div className="lieAlert__content__heading contentText">
                <span className="lieAlert__content__heading-text">The list of your links is empty! &#129320;</span>
            </div>
            <div className="lieAlert__content__description contentText">
                <span className="lieAlert__content__description-text">Make sure that have already used the app at least once <br/> Or just try again a bit later<DotestText/></span>
            </div>
            </div>
        </div>
    )
}