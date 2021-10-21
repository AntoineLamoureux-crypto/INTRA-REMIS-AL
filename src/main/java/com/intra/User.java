package com.intra;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue
    private int id;

    private String username;

    private int guessUserNumber;

    private int randomNumber;


}