import { Button, Grid, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
const SectionSix = ({student}) => {
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }


  return (
    <div className="profile-6-container">
      <h1 className="profile-6-header">RESUME</h1> 
      <Grid 
        container
        direction="row"
        alignItems="center"
      >
        <Grid item sm={6}>
          <Typography variant="body2" color="text.secondary">
          A college student resume is a summary of your studies and academic qualifications. Although as a student you may have little professional experience, there are many other activities and skills that you can present in your student resume.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Button variant="outlined" sx={{float:"left",ml:4}} href={student.resume} download>DOWNLOAD RESUME</Button>
        </Grid>
      </Grid>
      
      <div className="pdf-viewer-container">
        <header className="pdf-viewer-header">
          <Document file={student.resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1}/>
          </Document>
        </header>
      </div>
    </div>
  )
} 

export default SectionSix