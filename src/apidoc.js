/**
 * @api {post} /user/session Autenticar Usuário
 * @apiName AutenticarUsuario
 * @apiGroup Autenticação
 * 
 * @apiParam {String} email Email do usuário.
 * @apiParam {String} password Senha do usuário.
 * 
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} username Nome de usuário do usuário.
 * @apiSuccess {String} email Email do usuário.
 * @apiSuccess {String} roleId ID do papel do usuário.
 * @apiSuccess {String} token Token JWT para o usuário autenticado.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "username": "exampleuser",
 *       "email": "user@example.com",
 *       "roleId": "2",
 *       "token": "jwt.token.string"
 *     }
 * 
 * @apiError UserNotFound User or Password not found.
 * @apiError UserPasswordIncorrect User or Password incorrect.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "UserNotFound"
 *     }
 */


/**
 * @api {post} /user/password Solicitar Recuperação de Senha
 * @apiName Recuperação de Senha
 * @apiGroup Autenticação
 * 
 * @apiParam {String} email Email do usuário para recuperação de senha.
 * 
 * @apiSuccess {String} code Código gerado para recuperação de senha.
 * 
 * @apiSuccessExample Resposta de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "codigo-gerado"
 *     }
 * 
 * @apiError EmailNotSent Email is required.
 * @apiError UserNotFound Failed to find user.
 * 
 * @apiErrorExample User:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Failed to find user"
 *     }
 * @apiErrorExample Email:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Email is required"
 *     }
 */

/**
 * @api {post} /user Criar Usuario
 * @apiName Criar Usuario
 * @apiGroup Usuario
 *
 * @apiParam {String} username Nome de usuário do usuário.
 * @apiParam {String} email Endereço de email do usuário.
 * @apiParam {String} password Senha do usuário.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} username Nome de usuário do usuário.
 * @apiSuccess {String} email Endereço de email do usuário.
 * @apiSuccess {String} role Função do usuário.
 * @apiSuccess {String[]} permissions Permissões do usuário.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "UUID",
 *       "username": "example_user",
 *       "email": "user@example.com",
 *       "role": "null",
 *       "permissions": []
 *     }
 *
 * @apiError BadRequest Missing fields or invalid data.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All fields are required"
 *     }
 *
 * @apiError Conflict The provided email already exists.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Email already exists"
 *     }
 *
 * @apiError InternalServerError Failed to create user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to create user: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /user Lista todos os usuarios
 * @apiName Lista todos os usuarios
 * @apiGroup Usuario
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} username Nome de usuário do usuário.
 * @apiSuccess {String} email Endereço de e-mail do usuário.
 * @apiSuccess {String} role Função do usuário.
 * @apiSuccess {String[]} permissions Permissões do usuário.
 * @apiSuccess {Number} _count Contagem total de permissions do usuário.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       [
 *         {
 *           "id": "1",
 *           "username": "example_user1",
 *           "email": "user1@example.com",
 *           "role": "user",
 *           "permissions": ["read"],
 *           "_count": {
 *		        "permissions": 1
 *	         }
 *         },
 *         {
 *           "id": "2",
 *           "username": "example_user2",
 *           "email": "user2@example.com",
 *           "role": "admin",
 *           "permissions": ["read", "write"],
 *           "_count": {
 *		        "permissions": 2
 *	         }
 *         }
 *       ]
 *
 * @apiError InternalServerError Failed to list users.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list users: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /user/:id Obter usuário por ID
 * @apiName Obter usuário por ID
 * @apiGroup Usuario
 *
 * @apiParam {String} id ID único do usuário.
 * 
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} username Nome de usuário do usuário.
 * @apiSuccess {String} email Endereço de e-mail do usuário.
 * @apiSuccess {String} role Função do usuário.
 * @apiSuccess {String[]} permissions Permissões do usuário.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *         "id": "1",
 *         "username": "exemplo_usuario",
 *         "email": "usuario@exemplo.com",
 *         "role": "user",
 *         "permissions": ["read"]
 *       }
 *     }
 *
 * @apiError BadRequest ID não fornecido.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id is required for get user by id"
 *     }
 *
 * @apiError NotFound Usuário não encontrado.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 *
 * @apiError InternalServerError Falha ao listar usuário por ID.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list user by id: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /user/:id Atualizar Usuario
 * @apiName Atualizar Usuario
 * @apiGroup Usuario
 * 
 * @apiParam {String} id ID único do usuário.
 * @apiParam {String} [username] Novo nome de usuário do usuário.
 * @apiParam {String} [email] Novo endereço de e-mail do usuário.
 *
 * 
 * @apiSuccess {Object} user Detalhes atualizados do usuário.
 * @apiSuccess {String} user.id ID único do usuário.
 * @apiSuccess {String} user.username Nome de usuário atualizado.
 * @apiSuccess {String} user.email Endereço de e-mail atualizado do usuário.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *         "id": "1",
 *         "username": "usuario",
 *         "email": "novo_email@exemplo.com"
 *       }
 *     }
 *
 * @apiError BadRequest ID not provided.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Need to specify user id"
 *     }
 *
 * @apiError NotFound User not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 *
 * @apiError InternalServerError Failed to update user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update user: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /user/:id Excluir usuário
 * @apiName Excluir usuário
 * @apiGroup Usuario
 *
 * @apiParam {String} id ID único do usuário.
 * 
 * @apiSuccess {String} id ID único do usuário excluído.
 * @apiSuccess {String} username Nome de usuário do usuário excluído.
 * @apiSuccess {String} email Endereço de e-mail do usuário excluído.
 * @apiSuccess {String} role Função do usuário excluído.
 * @apiSuccess {String[]} permissions Permissões do usuário excluído.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *         "id": "1",
 *         "username": "usuario_excluido",
 *         "email": "email@excluido.com",
 *         "role": "user",
 *         "permissions": ["read"]
 *       }
 *     }
 *
 * @apiError BadRequest ID not provided.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id is required for delete user"
 *     }
 *
 * @apiError NotFound User not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 *
 * @apiError InternalServerError Failed to delete user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to delete user: Internal Prisma error"
 *     }
 */



/**
 * @api {post} /permission Criar permissão
 * @apiName Criar permissão
 * @apiGroup Permissões
 *
 * @apiParam {String} name Nome da permissão.
 * @apiParam {String} description Descrição da permissão.
 *
 * @apiSuccess {String} id ID único da permissão.
 * @apiSuccess {String} name Nome da permissão.
 * @apiSuccess {String} description Descrição da permissão.
 * @apiSuccess {Object[]} users Lista de usuários associados à permissão.
 * @apiSuccess {Object[]} roles Lista de funções associadas à permissão.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "permission": {
 *         "id": "1",
 *         "name": "read",
 *         "description": "Permissão para leitura",
 *         "users": [],
 *         "roles": []
 *       }
 *     }
 *
 * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All fields are required"
 *     }
 *
 * @apiError Conflict Permission already exists.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Permission already exists"
 *     }
 *
 * @apiError InternalServerError Failed to create permission.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to create permission: Internal Prisma error"
 *     }
 */

/**
 * @api {post} /permission/role Adicionar permissão para função
 * @apiName Adicionar permissão para função
 * @apiGroup Permissões
 *
 * @apiParam {String} permissionId ID da permissão.
 * @apiParam {String} roleId ID da função.
 * 
 * @apiSuccess {String} id ID único da função.
 * @apiSuccess {String} name Nome da função.
 * @apiSuccess {String} description Descrição da função.
 * @apiSuccess {Object[]} permissions Lista de permissões associadas à função.
 * @apiSuccess {String} id ID único da permissão.
 * @apiSuccess {String} name Nome da permissão.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "role": {
 *         "id": "1",
 *         "name": "admin",
 *         "description": "Administrador do sistema",
 *         "permissions": [
 *           {
 *             "id": "1",
 *             "name": "read"
 *           },
 *           {
 *             "id": "2",
 *             "name": "write"
 *           }
 *         ]
 *       }
 *     }
 *
  * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All fields are required"
 *     }
 *
 * @apiError NotFound Role not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Role Not Found"
 *     }
 *
 * @apiError NotFound Permission not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Permission Not Found"
 *     }
 *
 * @apiError Conflict Role already has this permission.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Role already has this permission"
 *     }
 *
 * @apiError InternalServerError Failed to add permission to role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to add permission to role: Internal Prisma error"
 *     }
 */

/**
 * @api {post} /permission/user Adicionar permissão para usuário
 * @apiName Adicionar permissão para usuário
 * @apiGroup Permissões
 *
 * @apiParam {String} permissionId ID da permissão.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} username Nome de usuário do usuário.
 * @apiSuccess {String} email Endereço de e-mail do usuário.
 * @apiSuccess {Object[]} permissions Lista de permissões associadas ao usuário.
 * @apiSuccess {Object} role Função associada ao usuário.
 * @apiSuccess {String} role.id ID único da função.
 * @apiSuccess {String} role.name Nome da função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *         "id": "1",
 *         "username": "user1",
 *         "email": "user1@example.com",
 *         "permissions": [
 *           {
 *             "id": "1",
 *             "name": "read"
 *           },
 *           {
 *             "id": "2",
 *             "name": "write"
 *           }
 *         ],
 *         "role": {
 *           "id": "1",
 *           "name": "admin"
 *         }
 *       }
 *     }
 *
 * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All Fields is Required"
 *     }
 *
 * @apiError NotFound User not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 *
 * @apiError NotFound Permission not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "error": "Permission Not Found"
 *     }
 * 
 * 
 * @apiError InternalServerError Failed to add permission to user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to add permission to user: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /permission/list Listar todas as permissões
 * @apiName Listar todas as permissões
 * @apiGroup Permissões
 *
 * @apiSuccess {String} id ID único da permissão.
 * @apiSuccess {String} name Nome da permissão.
 * @apiSuccess {String} description Descrição da permissão.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "1",
 *         "name": "read",
 *         "description": "Permissão para leitura"
 *       },
 *       {
 *         "id": "2",
 *         "name": "write",
 *         "description": "Permissão para escrita"
 *       }
 *     ]
 *
 * @apiError InternalServerError Falha ao listar todas as permissões.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list all permissions: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /permission/role Remover permissão de função
 * @apiName Remover permissão de função
 * @apiGroup Permissões
 *
 * @apiParam {String} permissionId ID da permissão.
 * @apiParam {String} roleId ID da função.
 *
 * @apiSuccess {String} id ID único da função.
 * @apiSuccess {String} name Nome da função.
 * @apiSuccess {String} description Descrição da função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "role": {
 *         "id": "1",
 *         "name": "admin",
 *         "description": "Administrador do sistema"
 *       }
 *     }
 *
 * 
 * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All fields are required"
 *     }
 *
 * @apiError NotFound Role not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Role Not Found"
 *     }
 *
 * @apiError NotFound Permission not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Permission Not Found"
 *     }
 *
 * @apiError Conflict Role does not have this permission.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Role does not have this permission"
 *     }
 *
 * @apiError InternalServerError Failed to remove permission from role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to Remove Permission from User: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /permission/user Remover permissão de usuário
 * @apiName Remover permissão de usuário
 * @apiGroup Permissões
 *
 * @apiParam {String} permissionId ID da permissão.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} username Nome de usuário do usuário.
 * @apiSuccess {String} email Endereço de e-mail do usuário.
 * @apiSuccess {Object[]} permissions Lista de permissões associadas ao usuário.
 * @apiSuccess {String} permissions.id ID único da permissão.
 * @apiSuccess {String} permissions.name Nome da permissão.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "username": "user1",
 *       "email": "user1@example.com",
 *       "permissions": []
 *     }
 *
 * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All Fields is Required"
 *     }
 *
 * @apiError NotFound User not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 *
 * @apiError InternalServerError Failed to remove permission from user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to Remove Permission from User: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /permission/update Atualizar permissão
 * @apiName Atualizar permissão
 * @apiGroup Permissões
 *
 * @apiParam {String} PermissionId ID da permissão a ser atualizada.
 * @apiParam {String} name Novo nome da permissão.
 * @apiParam {String} description Nova descrição da permissão.
 *
 * @apiSuccess {Object} permission Permissão atualizada.
 * @apiSuccess {String} permission.id ID único da permissão.
 * @apiSuccess {String} permission.name Novo nome da permissão.
 * @apiSuccess {String} permission.description Nova descrição da permissão.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "permission_update",
 *       "description": "Description_update"
 *     }
 *
 * @apiError BadRequest Id is required to identify the permission.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id is required to identify the permission"
 *     }
 *
 * @apiError NotFound Permission not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Permission not found"
 *     }
 *
 * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All fields are required"
 *     }
 *
 * @apiError InternalServerError Failed to update permission.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update permission: Internal Prisma error"
 *     }
 */

/**
 * @api {post} /role Criar função
 * @apiName Criar função
 * @apiGroup Funções
 *
 * @apiParam {String} name Nome da função.
 * @apiParam {String} description Descrição da função.
 *
 * @apiSuccess {String} id ID único da função.
 * @apiSuccess {String} name Nome da função.
 * @apiSuccess {String} description Descrição da função.
 * @apiSuccess {Object[]} users Lista de usuários associados à função.
 * @apiSuccess {Object[]} permissions Lista de permissões associadas à função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "new_role",
 *       "description": "Description of new role",
 *       "users": [],
 *       "permissions": []
 *     }
 *
 * @apiError BadRequest All fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "All fields are required"
 *     }
 *
 * @apiError Conflict Role already exists.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Role already exists"
 *     }
 *
 * @apiError InternalServerError Failed to create role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to create role: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /role/:id Excluir função
 * @apiName Excluir função
 * @apiGroup Funções
 *
 * @apiParam {String} RoleId ID da função a ser excluída.
 *
 * @apiSuccess {String} id ID único da função excluída.
 * @apiSuccess {String} name Nome da função excluída.
 * @apiSuccess {String} description Descrição da função excluída.
 * @apiSuccess {Object[]} users Lista de usuários associados à função excluída.
 * @apiSuccess {Object[]} permissions Lista de permissões associadas à função excluída.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "deleted_role",
 *       "description": "Description of deleted role",
 *       "users": [],
 *       "permissions": []
 *     }
 *
 * @apiError BadRequest Id is required to identify the role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id is required to identify the role"
 *     }
 *
 * @apiError InternalServerError Failed to delete Role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to delete Role: Internal Prisma error"
 *     }
 */

/**
 * @api {post} /role/user Inserir função para usuário
 * @apiName Inserir função para usuário
 * @apiGroup Funções
 *
 * @apiParam {String} RoleId ID da função a ser atribuída ao usuário.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} name Nome do usuário.
 * @apiSuccess {Object[]} roles Lista de funções associadas ao usuário.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "John Doe",
 *       "roles": [
 *         {
 *           "id": "1",
 *           "name": "Admin"
 *         }
 *       ]
 *     }
 *
 * @apiError BadRequest Id from role is required to identify role and user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id from role is required to identify role and user"
 *     }
 *
 * @apiError NotFound User not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 *
 * @apiError NotFound Role not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Role Not Found"
 *     }
 *
 * @apiError InternalServerError Failed to insert role for user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to insert role from user: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /role/:id Listar função por ID
 * @apiName Listar função por ID
 * @apiGroup Funções
 *
 * @apiParam {String} id ID da função a ser listada.
 *
 * @apiSuccess {String} id ID único da função.
 * @apiSuccess {String} name Nome da função.
 * @apiSuccess {String} description Descrição da função.
 * @apiSuccess {Number} _count Contagem de usuários associados à função.
 * @apiSuccess {Object[]} permissions Lista de permissões associadas à função.
 * @apiSuccess {Object[]} users Lista de usuários associados à função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Admin",
 *       "description": "Administrador do sistema",
 *       "_count": 3,
 *       "permissions": [
 *         {
 *           "id": "1",
 *           "name": "Read"
 *         },
 *         {
 *           "id": "2",
 *           "name": "Write"
 *         }
 *       ],
 *       "users": [
 *         {
 *           "id": "1",
 *           "email": "user1@example.com"
 *         },
 *         {
 *           "id": "2",
 *           "email": "user2@example.com"
 *         }
 *       ]
 *     }
 *
 * @apiError BadRequest Id from role is required to identify role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id from role is required to identify role"
 *     }
 *
 * @apiError InternalServerError Failed list role by id.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed list role by id: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /role Listar todas as funções
 * @apiName Listar todas as funções
 * @apiGroup Funções
 *
 * @apiSuccess {String} id ID único da função.
 * @apiSuccess {String} name Nome da função.
 * @apiSuccess {String} description Descrição da função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "1",
 *         "name": "Admin",
 *         "description": "Administrador do sistema"
 *       },
 *       {
 *         "id": "2",
 *         "name": "User",
 *         "description": "Usuário padrão"
 *       }
 *     ]
 *
 * @apiError InternalServerError Failed to list all roles.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list all roles: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /role/user/ Remover função de usuário
 * @apiName Remover função de usuário
 * @apiGroup Funções
 *
 * @apiParam {String} UserId ID do usuário.
 *
 * @apiSuccess {String} id ID único da função.
 * @apiSuccess {String} name Nome da função.
 * @apiSuccess {String} description Descrição da função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Admin",
 *       "description": "Administrador do sistema"
 *     }
 *
 * @apiError BadRequest Id is required to identify role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id is required to identify role"
 *     }
 *
 * @apiError NotFound User not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 *
 * @apiError NotFound Role not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Role Not Found"
 *     }
 *
 * @apiError InternalServerError Failed remove role from user.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed remove role from user: Internal Prisma error"
 *     }
 */
/**
 * @api {put} /role/ Atualizar função
 * @apiName Atualizar função
 * @apiGroup Funções
 *
 * @apiParam {String} RoleId ID da função a ser atualizada.
 * @apiParam {String} name Novo nome da função.
 * @apiParam {String} description Nova descrição da função.
 *
 * @apiSuccess {String} role.id ID único da função.
 * @apiSuccess {String} role.name Nome atualizado da função.
 * @apiSuccess {String} role.description Descrição atualizada da função.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Admin",
 *       "description": "Administrador do sistema"
 *     }
 *
 * @apiError BadRequest Id is required to identify the Role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id is required to identify the Role"
 *     }
 *
 * @apiError NotFound Role not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Role not found"
 *     }
 *
 * @apiError BadRequest Fields are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Fields are required"
 *     }
 *
 * @apiError InternalServerError Failed to update role.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update role: Internal Prisma error"
 *     }
 */
/**
 * @api {post} /tag/ Criar Tag
 * @apiName CriarTag
 * @apiGroup Tags
 *
 * @apiParam {String} name Nome da tag a ser criada.
 *
 * @apiSuccess {String} id ID único da tag.
 * @apiSuccess {String} name Nome da tag.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Tag1"
 *     }
 *
 * @apiError BadRequest Name is required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Name is required"
 *     }
 *
 * @apiError BadRequest Tag already exists.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Tag already exists"
 *     }
 *
 * @apiError InternalServerError Failed to create tag.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to create tag: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /tag/:id Deletar Tag
 * @apiName DeletarTag
 * @apiGroup Tags
 *
 * @apiParam {String} id ID da tag a ser deletada.
 *
 * @apiSuccess {String} id ID único da tag deletada.
 * @apiSuccess {String} name Nome da tag deletada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Tag1"
 *     }
 *
 * @apiError BadRequest Invalid id.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid id"
 *     }
 *
 * @apiError NotFound Tag not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Tag not found"
 *     }
 *
 * @apiError InternalServerError Failed to delete tag.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to delete tag: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /tag/ Listar Tags
 * @apiName ListarTags
 * @apiGroup Tags
 *
 * @apiSuccess {Object[]} tags Lista de tags.
 * @apiSuccess {String} id ID único da tag.
 * @apiSuccess {String} name Nome da tag.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "1",
 *         "name": "Tag1"
 *       },
 *       {
 *         "id": "2",
 *         "name": "Tag2"
 *       }
 *     ]
 *
 * @apiError InternalServerError Failed to list tags.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list tags: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /tag/:id Atualizar Tag
 * @apiName AtualizarTag
 * @apiGroup Tags
 *
 * @apiParam {String} id ID da tag a ser atualizada.
 * @apiParam {String} name Novo nome da tag.
 *
 * @apiSuccess {String} id ID único da tag atualizada.
 * @apiSuccess {String} name Nome atualizado da tag.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Tag1"
 *     }
 *
 * @apiError BadRequest Id from tag or name not provided.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id from tag or name not provided"
 *     }
 *
 * @apiError NotFound Tag not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Tag not found"
 *     }
 *
 * @apiError InternalServerError Failed to update tag.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update tag: Internal Prisma error"
 *     }
 */

/**
 * @api {post} /category/ Criar Categoria
 * @apiName CriarCategoria
 * @apiGroup Categorias
 *
 * @apiParam {String} name Nome da categoria a ser criada.
 * @apiParam {String} description Descrição da categoria a ser criada.
 *
 * @apiSuccess {String} id ID único da categoria.
 * @apiSuccess {String} name Nome da categoria.
 * @apiSuccess {String} description Descrição da categoria.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Categoria1",
 *       "description": "Descrição da Categoria1"
 *     }
 *
 * @apiError BadRequest Invalid data.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid data"
 *     }
 *
 * @apiError InternalServerError Failed to create category.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to create category: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /category/:id Deletar Categoria
 * @apiName DeletarCategoria
 * @apiGroup Categorias
 *
 * @apiParam {String} id ID da categoria a ser deletada.
 *
 * @apiSuccess {String} id ID único da categoria deletada.
 * @apiSuccess {String} name Nome da categoria deletada.
 * @apiSuccess {String} description Descrição da categoria deletada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Categoria1",
 *       "description": "Descrição da Categoria1"
 *     }
 *
 * @apiError BadRequest ID from post is required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "ID from post is required"
 *     }
 *
 * @apiError NotFound Category not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Category not found"
 *     }
 *
 * @apiError InternalServerError Failed to delete category.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to delete category: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /category/:id Obter Categoria por ID
 * @apiName ObterCategoriaPorID
 * @apiGroup Categorias
 *
 * @apiParam {String} id ID da categoria a ser obtida.
 *
 * @apiSuccess {String} id ID único da categoria.
 * @apiSuccess {String} name Nome da categoria.
 * @apiSuccess {String} description Descrição da categoria.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Categoria1",
 *       "description": "Descrição da Categoria1"
 *     }
 *
 * @apiError BadRequest Id from category is required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Id from category is required"
 *     }
 *
 * @apiError NotFound Category not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Category not found"
 *     }
 *
 * @apiError InternalServerError Failed to get category.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to get category: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /category/ Listar Categorias
 * @apiName ListarCategorias
 * @apiGroup Categorias
 *
 * @apiSuccess {Object[]} categories Lista de categorias.
 * @apiSuccess {String} id ID único da categoria.
 * @apiSuccess {String} name Nome da categoria.
 * @apiSuccess {String} description Descrição da categoria.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "1",
 *         "name": "Categoria1",
 *         "description": "Descrição da Categoria1"
 *       },
 *       {
 *         "id": "2",
 *         "name": "Categoria2",
 *         "description": "Descrição da Categoria2"
 *       }
 *     ]
 *
 * @apiError InternalServerError Failed to list categories.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list all categories: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /category/:id Atualizar Categoria
 * @apiName AtualizarCategoria
 * @apiGroup Categorias
 *
 * @apiParam {String} id ID da categoria a ser atualizada.
 * @apiParam {String} name Novo nome da categoria.
 * @apiParam {String} description Nova descrição da categoria.
 *
 * @apiSuccess {String} id ID único da categoria atualizada.
 * @apiSuccess {String} name Nome atualizado da categoria.
 * @apiSuccess {String} description Descrição atualizada da categoria.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "Categoria1",
 *       "description": "Descrição da Categoria1"
 *     }
 *
 * @apiError BadRequest ID from post or name or description is required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "ID from post or name or description is required"
 *     }
 *
 * @apiError NotFound Category not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Category not found"
 *     }
 *
 * @apiError InternalServerError Failed to update category.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update category: Internal Prisma error"
 *     }
 */

/**
 * @api {post} /post/ Criar Post
 * @apiName CriarPost
 * @apiGroup Posts
 *
 * @apiParam {String} title Título do post.
 * @apiParam {String} content Conteúdo do post.
 * @apiParam {Object[]} files Arquivos de mídia do post (fotos e vídeos). Os dados devem ser enviados como multipart/form-data.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [],
 *       "tags": []
 *     }
 *
 * @apiError BadRequest Title and Content are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Title and Content are required"
 *     }
 *
 * @apiError InternalServerError Error during upload.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Error during upload: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /post/image/delete/:id Remover Imagem do Post
 * @apiName RemoverImagemDoPost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {String[]} urlPost URLs da imagem a ser removida.
 *
 * @apiSuccess {Boolean} success Indica se a imagem foi removida com sucesso.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 * @apiError BadRequest ID and URL are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "ID and URL are required"
 *     }
 *
 * @apiError NotFound Post or Image not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post or Image not found"
 *     }
 *
 * @apiError InternalServerError Error during delete image from post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Error during delete image from post: Internal Prisma error"
 *     }
 */

/**
 * @api {delete} /post/:id Remover Post
 * @apiName RemoverPost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post a ser removido.
 *
 * @apiSuccess {String} id ID único do post removido.
 * @apiSuccess {String} title Título do post removido.
 * @apiSuccess {String} content Conteúdo do post removido.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post removido.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post removido.
 * @apiSuccess {Boolean} published Status de publicação do post removido.
 * @apiSuccess {Date} publishedAt Data de publicação do post removido.
 * @apiSuccess {Object[]} categories Categorias do post removido.
 * @apiSuccess {Object[]} tags Tags do post removido.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [],
 *       "tags": []
 *     }
 *
 * @apiError BadRequest ID from Post is required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "ID from Post is required"
 *     }
 *
 * @apiError NotFound Post not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found"
 *     }
 *
 * @apiError InternalServerError Failed to delete post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to delete post: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /post/:id Obter Post por ID
 * @apiName ObterPostPorID
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post a ser obtido.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [],
 *       "tags": []
 *     }
 *
 * @apiError BadRequest ID from Post is required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "ID from Post is required"
 *     }
 *
 * @apiError NotFound Post not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found"
 *     }
 *
 * @apiError InternalServerError Failed to get post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to get post: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /post/category/:id Inserir Categoria em Post
 * @apiName InserirCategoriaEmPost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {String} categoryId ID da categoria a ser inserida.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [{"id": "1", "name": "Categoria1"}],
 *       "tags": []
 *     }
 *
 * @apiError BadRequest Post ID and Category ID are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Post ID and Category ID are required"
 *     }
 *
 * @apiError NotFound Post or Category not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post or Category not found"
 *     }
 *
 * @apiError Conflict Category already inserted in this post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Category already inserted in this post"
 *     }
 *
 * @apiError InternalServerError Failed to insert category in Post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to insert category in Post: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /post/tag/:id Inserir Tag em Post
 * @apiName InserirTagEmPost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {String} tagId ID da tag a ser inserida.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [],
 *       "tags": [{"id": "1", "name": "Tag1"}]
 *     }
 *
 * @apiError BadRequest Post ID and Tag ID are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Post ID and Tag ID are required"
 *     }
 *
 * @apiError NotFound Post or Tag not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post or Tag not found"
 *     }
 *
 * @apiError Conflict Tag already inserted in this post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Tag already inserted in this post"
 *     }
 *
 * @apiError InternalServerError Failed to insert tag in Post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to insert tag in Post: Internal Prisma error"
 *     }
 */

/**
 * @api {get} /posts Listar Todos os Posts
 * @apiName ListarTodosOsPosts
 * @apiGroup Posts
 *
 * @apiSuccess {Object[]} posts Lista de posts.
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "1",
 *         "title": "Post1",
 *         "content": "Conteúdo do Post1",
 *         "photoUrls": ["url1", "url2"],
 *         "videoUrls": ["url3", "url4"],
 *         "published": true,
 *         "publishedAt": "2022-01-01T00:00:00.000Z",
 *         "categories": [{"id": "1", "name": "Categoria1"}],
 *         "tags": [{"id": "1", "name": "Tag1"}]
 *       },
 *       ...
 *     ]
 *
 * @apiError InternalServerError Failed to list all posts.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to list all posts: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /post/category/delete/:id Remover Categoria de Post
 * @apiName RemoverCategoriaDePost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {String} categoryId ID da categoria a ser removida.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [],
 *       "tags": [{"id": "1", "name": "Tag1"}]
 *     }
 *
 * @apiError BadRequest Post ID and Category ID are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Post ID and Category ID are required"
 *     }
 *
 * @apiError NotFound Post or Category not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post or Category not found"
 *     }
 *
 * @apiError Conflict Category not inserted in this post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Category not inserted in this post"
 *     }
 *
 * @apiError InternalServerError Failed to remove category from Post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to remove category from Post: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /post/tag/delete/:id Remover Tag de Post
 * @apiName RemoverTagDePost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {String} tagId ID da tag a ser removida.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [{"id": "1", "name": "Categoria1"}],
 *       "tags": []
 *     }
 *
 * @apiError BadRequest Post ID and Tag ID are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Post ID and Tag ID are required"
 *     }
 *
 * @apiError NotFound Post or Tag not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post or Tag not found"
 *     }
 *
 * @apiError Conflict Tag not inserted in this post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Tag not inserted in this post"
 *     }
 *
 * @apiError InternalServerError Failed to remove tag from Post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to remove tag from Post: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /post/:id Atualizar Post
 * @apiName AtualizarPost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {String} title Título do post.
 * @apiParam {String} content Conteúdo do post.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [{"id": "1", "name": "Categoria1"}],
 *       "tags": [{"id": "1", "name": "Tag1"}]
 *     }
 *
 * @apiError BadRequest Post ID, Title and Content are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Post ID, Title and Content are required"
 *     }
 *
 * @apiError NotFound Post not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found"
 *     }
 *
 * @apiError InternalServerError Failed to update post.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update post: Internal Prisma error"
 *     }
 */

/**
 * @api {put} /post/status/:id Atualizar Status de Publicação de Post
 * @apiName AtualizarStatusDePublicacaoDePost
 * @apiGroup Posts
 *
 * @apiParam {String} id ID do post.
 * @apiParam {Boolean} published Status de publicação do post.
 *
 * @apiSuccess {String} id ID único do post.
 * @apiSuccess {String} title Título do post.
 * @apiSuccess {String} content Conteúdo do post.
 * @apiSuccess {String[]} photoUrls URLs das fotos do post.
 * @apiSuccess {String[]} videoUrls URLs dos vídeos do post.
 * @apiSuccess {Boolean} published Status de publicação do post.
 * @apiSuccess {Date} publishedAt Data de publicação do post.
 * @apiSuccess {Object[]} categories Categorias do post.
 * @apiSuccess {Object[]} tags Tags do post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "Post1",
 *       "content": "Conteúdo do Post1",
 *       "photoUrls": ["url1", "url2"],
 *       "videoUrls": ["url3", "url4"],
 *       "published": true,
 *       "publishedAt": "2022-01-01T00:00:00.000Z",
 *       "categories": [{"id": "1", "name": "Categoria1"}],
 *       "tags": [{"id": "1", "name": "Tag1"}]
 *     }
 *
 * @apiError BadRequest Post ID and Published status are required.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Post ID and Published status are required"
 *     }
 *
 * @apiError NotFound Post not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found"
 *     }
 *
 * @apiError InternalServerError Failed to update post status.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to update post status: Internal Prisma error"
 *     }
 */