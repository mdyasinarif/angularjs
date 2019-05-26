/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yasin;

import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author hp
 */
@ManagedBean
public class StudentController {

    public List<Student> students;

    public List<Student> getStudents() {

        students = new ArrayList<>();
        students.add(new Student("Yasin", 102, "Male"));
        return students;

    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

}
