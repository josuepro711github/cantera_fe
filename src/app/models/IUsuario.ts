export interface IUsuarioLogin{
    username: string;
    password: string
}

export interface IRegistro{
    nombres: string;
    apellidos: string,
    email: string;
    password: string
}

export interface IUsuario{
    id?: string
    nombre: string;
    apellidos: string;
    user_name: string;
    pass_word: String;
}

export interface IUsuarioU{
    id?: string
    nombre?: string;
    email?: string;
    apellidos?: string;
    ciudad?: string;
    telefono?: String;
    password?: String;
}


export interface IPostula{
    id?: string 
    nombres?: string;
    apellidos?: string;
    email?: string;
    dni?: string;
    celular?: string;   
    telefono?: string;
    ocupacion?: string;
    ocupacion_otros?: string
    experiencia?: string;
    aprobado?: number;
    idUsuario?: number;
}