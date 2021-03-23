import React, { useCallback, useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { LinkList } from '../components/LinkList'
import { Loader } from '../components/Loader'
import { useHttp } from '../hooks/http.hook'

export const ListOfShortenedLinks = () =>{
    const [links, setLinks] = useState([])
    const {loading , request} = useHttp()
    const globalState = useSelector(state => state)
    
    const fetchLinks = useCallback(async ()=>{
        try{
            const fetched = await request("/api/link" , "GET" , null , {authorization:`Bearer ${globalState.auth.token}`})
            setLinks(fetched)
        } catch (e){
            console.log(e.message)
        }
    }, [globalState.auth.token, request])
    
    useEffect(()=>{
        fetchLinks()
    }, [fetchLinks])
    
    if (loading){
        <Loader/>
    }

    return(
        <Fragment>
            {!loading && <LinkList links={links}/>}
        </Fragment>
    )
}