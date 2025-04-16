import { asyncHandler } from '../utils/async.handler.js';

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //
});

const logoutUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //
});

const resendVerificationEmail = asyncHandler(
  async (req, res) => {
    const { email, username, password, role } = req.body;

    //
  }
);

const refreshAccessToken = asyncHandler(
  async (req, res) => {
    const { email, username, password, role } = req.body;

    //
  }
);

const forgotPasswordRequest = asyncHandler(
  async (req, res) => {
    const { email, username, password, role } = req.body;

    //
  }
);

const changeCurrentPassword = asyncHandler(
  async (req, res) => {
    const { email, username, password, role } = req.body;

    //
  }
);

const getCurrentUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //
});

export { registerUser };
