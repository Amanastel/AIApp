package com.innov8.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull(message = "User Name cannot be null")
    @Size(min = 3, max = 30, message = "User Name must be between 3 and 30 characters")
    private String name;
    @Email( message = "Email is not valid")
    @Column(unique = true)
    private String email;

    @NotNull(message = "Password cannot be null")
    @NotBlank(message = "Password cannot be blank")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @NotNull(message = "Phone cannot be null")
    @Size(min = 10, max = 13, message = "Phone must be 10 to 12 characters")
    @Column(unique = true)
    private String phone;
    @NotNull(message = "Address cannot be null")
    @Size(min = 4, max = 50, message = "Address must be between 4 and 50 characters")
    private String address;
    @NotNull(message = "Track cannot be null")
    @Size(min = 3, max = 50, message = "Track must be between 4 and 50 characters")
    private String track;
    private String role;

}
