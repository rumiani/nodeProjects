const postData = (url, data) => {  
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => { 
        console.log(response);
        
        return response.json();
      })
      .catch(error => {
        console.error('Error posting data:', error);
        throw error;
      });
  };
  
  // postData(url, data)
  //   .then(responseData => {
  //     console.log('Data posted successfully:', responseData);
  //     // Handle the response from the server if needed
  //   })
  //   .catch(error => {
  //     console.error('Error posting data:', error);
  //     // Handle any errors that occurred during the request
  //   });
export default postData;