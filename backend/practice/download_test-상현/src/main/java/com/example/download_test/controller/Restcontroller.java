package com.example.download_test.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Restcontroller {
    @GetMapping("/download")
    public void download() {
        String str = "asdf";

    }
}
