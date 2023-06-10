import axios from "axios";
import * as XLSX from 'xlsx';


export default class EmployeeService {

  async getEmployee() {
    var admin = window.sessionStorage.getItem('userid');
    var promise = axios.get("http://localhost:3001/api/getEmployee/show/", { params: { 'admin': admin } });
    var data = null;
    await promise.then((result) => data = JSON.stringify(result.data));
    return data;
  }

  updateEmployee(employee) {
    return axios.put(`http://localhost:3001/api/employees/${employee.id}`, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`http://localhost:3001/api/employees/${id}`);
  }

  async importEmployees(file, adminId) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('admin_id', adminId);

      const response = await axios.post('http://localhost:3001/import-employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response;
    } catch (error) {
      console.error('Error importing employees: ', error);
      throw error;
    }
  }

  exportToExcel = () => {
    return axios.get('http://localhost:3001/api/export_employees').then(response => {

      const employees = response.data.map((employee) => ({
        cin: employee.cin,
        nom: employee.nom,
        prenom: employee.prenom,
        som: employee.som,
        grade: employee.grade,
        date_fonction: employee.date_fonction.substring(0, 10), // Format the date_fonction field
      }));
      

      // Create a new workbook
      const workbook = XLSX.utils.book_new();

      // Create a worksheet
      const worksheet = XLSX.utils.json_to_sheet(employees);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');

      // Generate the Excel file buffer
      const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

      return excelBuffer;
    })
      .catch(error => {
        throw error;
      });
  };

}