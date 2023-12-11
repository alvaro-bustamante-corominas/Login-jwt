package login.loginjwt.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(value="/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {
    
    private final UserService userService;

   @GetMapping(value="{id}")
   public ResponseEntity<UserDTO> getUser(@PathVariable Integer id){
        
        UserDTO userDto = userService.getUser(id);
        if(userDto == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(userDto);
   }

   @PutMapping()
   public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest userRequest){
        UserResponse userResponse = userService.updateUser(userRequest);
        return ResponseEntity.ok(userResponse);
    }
   
    
}
