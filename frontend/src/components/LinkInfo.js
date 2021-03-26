import "../scss/_linkInfo.scss"

export const LinkInfo = ({link})=>{ // получаем проапсы link, которые передаем в 
    return (
        <div className="linkInfo-main">
            <div className="linkInfo__content">
                <h2 className="linkInfo__content__text">Your link 	&#128516;</h2>
                <p className="linkInfo__content__text" >New cut link  : <a href = {link.to} target = "_blank" rel = "noopener noreferrer">{link.to}</a></p>
                <p className="linkInfo__content__text" >Old one: <a href = {link.from} target="_blank" rel = "noopener noreferrer">{link.from}</a></p>
                <p className="linkInfo__content__text" >Number of clicks on this link: <strong>{link.numberOfCLicks}</strong></p>
                <p className="linkInfo__content__text" >Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
            </div>
        </div>
    )
}