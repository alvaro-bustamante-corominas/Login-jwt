package login.loginjwt.User;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; 

    public UserDTO getUser(Integer id) {
        User user= userRepository.findById(id).orElse(null);
       
        if (user!=null)
        {
            UserDTO userDTO = UserDTO.builder()
            .id(user.id)
            .username(user.username)
            .build();
            return userDTO;
        }
        return null;
    }

    @Transactional
    public UserResponse updateUser(UserRequest userRequest) {
        
        User user = User.builder()
            .id(userRequest.id)
            .password(passwordEncoder.encode(userRequest.getPassword()))
            .build();

        
        userRepository.updateUser(user.id, user.password);

        return new UserResponse("The password of the user has been updated");
    }

}
