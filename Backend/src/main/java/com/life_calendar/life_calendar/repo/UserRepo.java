package com.life_calendar.life_calendar.repo;

import com.life_calendar.life_calendar.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);
    boolean existsByEmail(String email);

    User findByEmailAndPassword(String email, String password);

    User findByEmailAndResetCode(String email, String resetCode);

    @Transactional
    @Modifying
    @Query("UPDATE Users a " +
            "SET a.password = ?2 WHERE a.email = ?1")
    int updatePassword(String email, String password);

    @Transactional
    @Modifying
    @Query("UPDATE Users a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")
    int enableUser(String email);

    @Transactional
    @Modifying
    @Query("UPDATE Users a " +
            "SET a.resetCode = ?2 WHERE a.email = ?1")
    int updateResetCode(String email, String code);

    @Transactional
    @Modifying
    @Query("UPDATE Users a " +
            "SET a.username = ?1, a.password = ?2, a.birthday = ?3 WHERE a.email = ?4")
    int updateUserProfile(String username, String newPassword, LocalDate birthday, String email);

    @Transactional
    @Modifying
    @Query("UPDATE Users a " +
            "SET a.username = ?1, a.password = ?2, a.birthday = ?3 WHERE a.email = ?4")
    int updateUser(String username, String newPassword, LocalDate birthday, String email);

    @Transactional
    @Modifying
    @Query("UPDATE Users a " +
            "SET a.username = ?1, a.birthday = ?2 WHERE a.email = ?3")
    int updateProfileWithoutPassword(String username, LocalDate birthday, String email);
}
