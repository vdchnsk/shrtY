import "../scss/_linkList.scss"

export const LinkInfo = ({link})=>{ // получаем проапсы link, которые передаем в 
    return (
        <div className="linkList">
            <h2>Your link</h2>
            <p>New cut link  : <a href = {link.to} target = "_blank" rel = "noopener noreferrer">{link.to}</a></p>
            <p>Old one: <a href = {link.from} target="_blank" rel = "noopener noreferrer">{link.from}</a></p>
            <p>Number of clicks on this link: <strong>{link.numberOfCLicks}</strong></p>
            <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}