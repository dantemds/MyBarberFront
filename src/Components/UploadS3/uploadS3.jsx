import React from 'react'
import {useState} from 'react'
import axios from 'axios'
export default function UploadS3() {
    const [file, setFile] = useState()
    const [caption, setCaption] = useState("")

    const submit = async event => {
        event.preventDefault()
    
        const formData = new FormData();
        formData.append("image", file)
        formData.append("caption", caption)
        await axios.post("/api/posts", formData, { headers: {'Content-Type': 'multipart/form-data'}})
    
        
      }

      const fileSelected = event => {
        const file = event.target.files[0]
            setFile(file)
        }

    return(
        <>
            <form onSubmit={submit} style={{width:650}} className="flex flex-col space-y-5 px-5 py-14">
                <label>Adicione uma imagem</label>
                <input onChange={fileSelected} type="file" accept="image/*"></input>
                <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
          <button type="submit">Submit</button>
            </form>
        </>
    )
}