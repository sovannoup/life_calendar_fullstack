package com.life_calendar.life_calendar.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

@Data
@NoArgsConstructor
@Entity(name = "Users")
@Table(name="Users")
public class User implements UserDetails {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Firstname should not be blank")
    @NotNull(message = "Firstname is required")
    @Size(max = 30, message = "Firstname must not be more than 30 digit")
    private String firstname;
    @NotBlank(message = "Lastname should not be blank")
    @NotNull(message = "Lastname is required")
    @Size(max = 30, message = "Lastname must not be more than 30 digit")
    private String lastname;
    @NotBlank(message = "Email should not be blank")
    @NotNull(message = "Email is required")
    @Email(message = "Email is invalid")
    private String email;
    @Past
    @NotNull(message = "Birthday is required")
    private LocalDateTime birthday;

    @NotBlank(message = "Password should not be blank")
    @NotNull(message = "Password is required")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$", message = "require at least 1 lower cha, 1 upper cha, 1 number, and at least 8 digit")
    private String password;
    private String imageUrl;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    private Boolean locked = false;
    private Boolean enabled = false;
    private String resetCode = null;

    public User(String firstname, String lastname, String email, LocalDateTime birthday, String password ,UserRole userRole) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthday = birthday;
        this.password = password;
        this.userRole = userRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(UserRole.USER.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getUsername() {
        return firstname + " " + lastname;
    }

    @Override
    public boolean isAccountNonExpired() {
        return !this.locked;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return !this.enabled;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
