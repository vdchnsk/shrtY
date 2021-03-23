import React, { useCallback, useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { LinkInfo } from '../components/LinkInfo'
import { Loader } from '../components/Loader'
import { useHttp } from '../hooks/http.hook'
import "../scss/_loader.scss"

export const DetailsPage = () =>{
    const globalState = useSelector(state=> state)
    const {request, loading} = useHttp()
    const [link , setLink] = useState(null)
    const linkId = useParams().id //получаем id из основног роутера route.js на фронте

    const getLink = useCallback(async ()=>{
        try{
            const fetched = await request(`/api/link/${linkId}`, "GET" , null, {authorization:`Bearer ${globalState.auth.token}`})
            setLink(fetched)
        } catch(e){
            console.log(e.message)
        }
    }, [globalState.auth.token , linkId , request])

    useEffect(()=>{
        getLink()
    }, [getLink])

    if (loading){
        return <Loader/>
    }
    return(
        <Fragment>
            { !loading && link && <LinkInfo link={link}/>}
        </Fragment>
    )
}