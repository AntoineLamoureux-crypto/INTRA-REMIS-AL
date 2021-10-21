package com.intra;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
public class UserGuessResponse implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private int userRandomNumber;
    private String result;

}