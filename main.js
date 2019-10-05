function performGetRequest11() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput1(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput1(error);
      });   
  }

  function generateSuccessHTMLOutput1(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }
  function generateErrorHTMLOutput1(error) {
    return  '<h4>Result</h4>' + 
            '<h5>Message:</h5> ' + 
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5> ' + 
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
  }

  function performGetRequest3() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos', {
      params: {
        id: todoId
      }
    })
    .then(function (response) {
      console.log(response);
      resultElement.innerHTML = generateSuccessHTMLOutput1(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput1(error);
    });
  }

  document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
function performPostRequest1(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';
  
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: todoTitle,
    completed: false
  })
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput1(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = generateErrorHTMLOutput1(error);
  });
  
  e.preventDefault();
}