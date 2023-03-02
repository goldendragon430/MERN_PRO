import React,{useState} from 'react'
import { AdminCard } from '../../shared'
import {Content,FileContainter} from './styles'
import  {useForm} from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '../../../styles'
export const BannerCard = (props)=>{
const {title,name} = props
const {register,handleSubmit} = useForm()

const onSubmit = async(data) => {
    const formData = new FormData();
    formData.append("files", data.file[0]);
    formData.append("name", name);
    const url = process.env.REACT_APP_SERVER_URL + 'fileservice/upload';
    
    const res = await fetch(url, {
        method: "POST",
        body: formData 
    }).then((res) => {
        if(res.data == "failed" || res.error){
            toast("Server Error",{type:'error'})
        }
        else{
            toast.success("Success",{
                onClose:()=>{
                    window.location.reload(false)
                },
                autoClose : 3000
            })
        }
    });
    

}
return(
    <AdminCard title = {title}>
    <h2 style = {{textAlign:'center',marginBottom:5}}> {title} </h2>
    <Content>
        <img src = {process.env.REACT_APP_SERVER_URL + 'fileservice/get_banner_file?name=' + name + '.jpg' }  style = {{maxWidth:1200,width:'60%'}}/>
    </Content>
    <form onSubmit={handleSubmit(onSubmit)}>
        <FileContainter>
            <input type = 'file' accept=".jpg" {...register('file')}  required />  
            <Button  color='primary' style = {{marginTop:-10}}  type = "submit">Upload</Button>
        </FileContainter>
    </form>
</AdminCard>
)
}