package vdtry06.logic.springboot.manage.backend.controller;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vdtry06.logic.springboot.manage.backend.dto.EmployeeDto;
import vdtry06.logic.springboot.manage.backend.service.EmployeeService;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor()
@RequestMapping("/api/employees")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmployeeController {
    EmployeeService employeeService;

    // build add employee rest API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto employee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    // build get employee Rest API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") long employeeId) {
        EmployeeDto employee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    // build get all employees rest API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    // build update employee rest API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") long employeeId, @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employee = employeeService.updateEmployee(employeeId, updatedEmployee);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    // build delete employee rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return new ResponseEntity<>("Employee deleted successfully!", HttpStatus.OK);
    }

    // build search employee rest API
    @GetMapping("/search")
    public ResponseEntity<List<EmployeeDto>> searchEmployee(@RequestParam("keyword") String keyword) {
        List<EmployeeDto> employees = employeeService.searchEmployee(keyword);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

}
