package vdtry06.logic.springboot.manage.backend.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor()
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmployeeDto {
    long id;
    String firstName;
    String lastName;
    String email;
}
