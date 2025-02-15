package vdtry06.logic.springboot.manage.backend.mapper;

import vdtry06.logic.springboot.manage.backend.dto.EmployeeDto;
import vdtry06.logic.springboot.manage.backend.entity.Employee;


public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
