package com.technet.api.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Tech Net Auto World";
    }

    @GetMapping("/auth")
    @PreAuthorize("hasAuthority(ROLE_ADMIN)")
    public String auth() {
        return "Successfully authenticated";
    }

}
