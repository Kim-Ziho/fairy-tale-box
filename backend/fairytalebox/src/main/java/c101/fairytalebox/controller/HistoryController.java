package c101.fairytalebox.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/history")
@RequiredArgsConstructor
public class HistoryController {

    @GetMapping("getHistory")
    public List<Map<String,Object>> getAllHistory(){
        List<Map<String,Object>> histories = new ArrayList<>();


        return histories;
    }
}
