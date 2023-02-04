package com.ssafy.crudtest.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.crudtest.entity.Content;
import com.ssafy.crudtest.repository.ContentRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/content")

public class Restcontroller {

    ContentRepository contentRepository;

    @GetMapping
    public List<Map<String, Object>> list() {
        List<Map<String, Object>> result = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        map.put("apple", "0");
        result.add(map);
        return result;
    }

    @PostMapping
    public Map<String, String> post(@RequestPart("picture") MultipartFile pic,
                                    @RequestParam("title") String title,
                                    @RequestParam("password") String password) throws IOException {
        String path = System.getProperty("user.dir");
        File file = new File(path + "/src/main/resources/static" + pic.getOriginalFilename());
        Map<String, String> map = new HashMap<>();
        return map;
    }

}
