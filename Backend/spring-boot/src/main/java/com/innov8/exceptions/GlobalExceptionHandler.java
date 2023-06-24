package com.innov8.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.time.LocalDateTime;



@RestControllerAdvice
public class GlobalExceptionHandler {




    @ExceptionHandler(UsersException.class)
    public ResponseEntity<ErrorDetails> userExceptionHandler(UsersException de, WebRequest web){
        ErrorDetails err = new ErrorDetails();
        err.setMessage(de.getMessage());
        err.setTimeStamp(LocalDateTime.now());
        err.setDescription(web.getDescription(false));
        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
    }
    

	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDetails> gereralExceptionHandler(Exception ex ,WebRequest req){
		ErrorDetails err= new ErrorDetails();
		err.setTimeStamp(LocalDateTime.now());
		err.setMessage(ex.getLocalizedMessage());
		err.setDescription(req.getDescription(false));
		return new ResponseEntity<>(err,HttpStatus.BAD_REQUEST);
	}
	

	


}
