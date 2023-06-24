package com.innov8.exceptions;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class ErrorDetails {

	private LocalDateTime timeStamp;
	private String message;
	private String description;
}
